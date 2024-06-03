import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { G4F } from "g4f";
import axios from 'axios';
import cheerio from 'cheerio';

const bot = new Telegraf(`7320073050:AAFy6WP_JdEbxrf_Z0ZLPJfVQtCuDpipFmg`)
const g4f = new G4F();

bot.start((ctx) => ctx.reply(' Как я могу помочь вам сегодня?'));

async function extractTextFromUrl(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const text = $('article, #content, .article-content, .entry-content, .main-content')
            .text()
            .replace(/[\t\n\r]+/g, ' ')
            .trim();

        return text;
    } catch (error) {
        console.error('Error extracting text from URL:', error.message);
        return '';
    }
}

async function getLinks(query) {
    const url = `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;
    try {
        const { data } = await axios.get(url);

        const $ = cheerio.load(data);
        const links = [];
        $('.gs_rt a').each((i, link) => {
            const href = $(link).attr('href');
            if (href && !href.includes('https://elibrary.ru') && !href.endsWith('.pdf') && !href.includes('https://books.google.com/books?')) {
                links.push(href);
            }
        });

        if (links.length === 0) {
            return { text: '' };
        }

        const lastLink = links[links.length - 1];
        const text = await extractTextFromUrl(lastLink);

        return { text };
    } catch (error) {
        console.error('Error fetching search results:', error.message);
        return { text: '' };
    }
}

async function chatCompletionWithTimeout(messages, timeout) {
    try {
        const response = await g4f.chatCompletion(messages, { timeout });
        return response;
    } catch (error) {
        throw error;
    }
}

bot.on('message', async (ctx) => {
    const userText = ctx.message.text;
    console.log(`Received message from user: ${userText}`);

    try {
        const { text: extractedText } = await getLinks(userText);
        console.log(`Extracted text from URL: ${extractedText}`);

        const combinedContent = `говори на темы только про Химические источники тока на все остальные вопросы говори я немогу об этом говорить вот сообщение : ${userText}\n\n${extractedText}`;
        console.log(`Combined content: ${combinedContent}`);

        const messages = [{ role: 'user', content: combinedContent }];

        const gptResponse = await chatCompletionWithTimeout(messages, 120000);
        console.log(`GPT response: ${gptResponse}`);
        ctx.reply(`Ответ GPT:\n${gptResponse}`);
    } catch (error) {
        console.error('Error processing request:', error.message);
        ctx.reply('Ошибка обработки вашего запроса. Пожалуйста, попробуйте позже.');
    }
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));