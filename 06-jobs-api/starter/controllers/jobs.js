const getAllJobs = async(req, res)=> {
    res.send('get all the job')
}

const getJob = async(res, req)=> {
    res.send('get single job')
}

const createJob = async(req, res)=> {
    res.json(req.body)
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