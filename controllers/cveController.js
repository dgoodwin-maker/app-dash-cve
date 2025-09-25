const CVE = require('../models/CVE');

// Display all CVEs
exports.getAllCVEs = async (req, res) => {
  try {
    const cves = await CVE.find().sort({ createdAt: -1 });
    res.render('index', { cves });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Add new CVE
exports.createCVE = async (req, res) => {
  const { cveId, description, source } = req.body;
  try {
    await CVE.create({ cveId, description, source });
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Render edit page
exports.editPage = async (req, res) => {
  try {
    const cve = await CVE.findById(req.params.id);
    res.render('edit', { cve });
  } catch (err) {
    res.status(404).send('CVE not found');
  }
};

// Update CVE
exports.updateCVE = async (req, res) => {
  const { cveId, description, source } = req.body;
  try {
    await CVE.findByIdAndUpdate(req.params.id, { cveId, description, source });
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete CVE
exports.deleteCVE = async (req, res) => {
  try {
    await CVE.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
};