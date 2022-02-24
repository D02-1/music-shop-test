const Record = require('../Models/Record')



const getRecords = (req, res) =>
{
    Record.find({}, (err, records) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
        return res.status(200).json({
            success: true,
            data: records,
           
        })
    })
}

const getRecordId = (req, res) =>
{
    const { id } = req.params;

    Record.find({ _id: id}, (err, records) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }

        return res.status(200).json({
            success: true,
            data: records[0]
        });
    })
}

 const createRecord = (req, res) =>
 {
    const newRecord = new Record();

    newRecord.artist = 'adele';
    newRecord.name = 'song1';
    newRecord.year = 2001;
    newRecord.price = 15;

    newRecord.save((err, record) =>
    {
        if(err) throw err;
        res.status(400).json(record);
        console.log(newRecord)
    })
 }

const editRecordId = (req, res) =>
{
    const { id } = req.params;

    Record.findOne({ _id: id}, (err, record) =>
    {
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err.message
            })
        }

        record.brand = req.body.brand || record.brand;
        record.name = req.body.name || record.name;
        record.type = req.body.type || record.type;
        record.year = req.body.year || record.year;

        record.save((err, updatedRecord) =>
        {
            if(err)
            {
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }

                return res.status(200).json({
                    success: true,
                    newData: req.body,
                    data: updatedRecord
                })
        })
    })

    
   
   res.status(200).send("The Record with the ID Number " + id + " can be edited");
}

const deleteRecordId = (req, res) =>
{
    const { id } = req.params;

    Record.deleteOne({ _id: id })
    .then(() =>
    {
        return res.status(200).json({
            success: true,
            message: "Eintrag mit id " + id + " wurde gelöscht!"
        });
    })
    .catch(err =>
    {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    });

    //console.log(deleteRecordId)
    // res.status(200).send("The Record with the ID Number " + id + " can be deleted");
}

module.exports = {getRecords, getRecordId, editRecordId, deleteRecordId, createRecord }