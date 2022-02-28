const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const Job = require("../models/Job");

const getAllJobs = async(req, res)=> {
    const jobs =await Job.find({ createdBy: req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ jobs, count:jobs.length })
}

const getJob = async(req, res)=> {
    // nested destructuring to pull out userId and jobId from req
    const {user:{userId}, params:{id:jobId}} = req;
    const job = await Job.findOne({
        _id: jobId,
        createdBy: userId,
    })
    if(!job) {
        throw new NotFoundError(`No job with the ${jobId}`)
    }
    res.status(StatusCodes.OK).json({ job });
}

const createJob = async(req, res)=> {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async(req, res)=> {

    const {
        body: {company, position},
        user:{ userId },
        params: { id: jobId }
    } = req;

    if(company === '' || position === ''){
        throw new BadRequestError('Company or Position cannot be empty')
    }

    const job = await Job.findByIdAndUpdate(
        { _id: jobId, createdBy: userId },
        req.body,
        { new: true, runValidators: true }
    )

    if(!job) {
        throw new NotFoundError(`No job with the ${jobId}`)
    }
    res.status(StatusCodes.OK).json({ job });
}

const deleteJob = async (req, res)=> {
    res.send('delete job')
}

module.exports ={
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}