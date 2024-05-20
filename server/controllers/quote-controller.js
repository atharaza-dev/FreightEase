//* REQUIRING Models
const QuoteGen = require('../models/quote-model'); // Adjust the path as per your file structure

const quoteGenerator = async (req, res) => {
    try {
        const { origin, destination, rate } = req.body;

        const quoteExist = await QuoteGen.findOne({ origin, destination, rate });

        if (!quoteExist) {
            const QuoteCreated = await QuoteGen.create({ origin, destination, rate });
            res.status(201).json({ msg: "Quote Added Successfully", });
            console.table({ Quote: QuoteCreated });
        } else {
            return res.status(409).json({ msg: "Quote with these details already exists!" });
        }
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
}

const getQuoteData = async (req, res) => {
    try {
        const quoteData = await QuoteGen.find();
        if (!quoteData) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(quoteData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteQuote = async (req, res) => {
    try {
        const id = req.params.id;
        const quoteFound = await QuoteGen.findById(id);
        if (!quoteFound) {
            return res.status(404).json({ msg: "Quote Data not found!" });
        }
        await QuoteGen.findByIdAndDelete(id);
        res.status(200).json({ msg: "Quote Data Deleted!" });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { quoteGenerator, getQuoteData, deleteQuote };