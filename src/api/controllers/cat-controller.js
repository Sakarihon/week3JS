import { addCat, findCatById, listAllCats } from '../models/cat-model.js';

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.status(404).json({ message: 'Cat not found' });
  }
};

const postCat = (req, res) => {
  console.log('Form fields:', req.body);
  console.log('Uploaded file:', req.file);

  if (!req.file) {
    return res.status(400).json({ message: 'File is required' });
  }


  const catData = { ...req.body, filename: req.file.filename };

  try {
    const result = addCat(catData);
    res.status(201).json({
      message: 'Cat successfully added',
      result,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const putCat = (req, res) => {
  res.json({ message: 'Cat updated (not implemented yet)' });
};

const deleteCat = (req, res) => {
  res.json({ message: 'Cat deleted (not implemented yet)' });
};

export { getCat, getCatById, postCat, putCat, deleteCat };
