const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const Job = require("../models/Job");

const getAllJobs = async(req, res)=> {
    res.send('get all the job')
}

const getJob = async(res, req)=> {
    res.send('get single job')
}

const createJob = async(req, res)=> {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async(req, res)=> {
    res.send('update job')
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