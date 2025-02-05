const contactsOperations = require("../../models/contacts/index");

const addContact = async (req, res, next) => {
  try {
    const result = await contactsOperations.addContact(req.body);
    res.status(200).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = addContact;
