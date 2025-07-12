import categories from '../../models/categories.js';

export const getCategories = (req, res) => {
  const message = req.query.message;
  categories.find().then((data) => {
    res.render('categories', { title: 'Categories page', categories: data, message });
  })
  .catch((err) => {
    console.error('Error fetching data:', err);
    res.status(500).send('Error fetching data');
  });
};

export const postCategories = (req, res) => {
  const category = new categories(req.body);
  category.save().then(() => {
    res.redirect('/?message=Data saved successfully');
  }).catch((err) => {
    console.error('Error saving data:', err);
    res.status(500).send('Error saving data');
  });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  categories.findById(id).then((data) => {
    if (!data) {
      return res.status(404).send('Data not found');
    }
    categories.find().then((categories) => {
      res.render('categories', {
        title: 'Edit page',
        categories,
        editData: data
      });
    });
  }).catch((err) => {
    console.error('Error fetching data for edit:', err);
    res.status(500).send('Error fetching data for edit');
  });
};

export const putEdit = (req, res) => {
  const id = req.params.id;
  categories
    .findByIdAndUpdate(id, req.body, { new: true, runValidators: true }) // { new: true } returns the updated document; { runValidators: true } ensures schema validation during update
    .then(() => {
      res.redirect('/?message=Data updated successfully');
    })
    .catch((err) => {
      console.error('Error updating data:', err);
      res.status(500).send('Error updating data');
    });
};

export const deleteData = (req, res) => {
  const id = req.params.id;
  categories.findByIdAndDelete(id).then(() => {
    res.redirect('/?message=Data deleted successfully');
  })
  .catch((err) => {
    console.error('Error deleting data:', err);
    res.status(500).send('Error deleting data');
  });
}