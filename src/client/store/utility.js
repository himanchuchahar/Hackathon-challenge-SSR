/**
 * Utility file to manipulate job's list data
 */

 /**
  * 
  * @param {*} emplyomentType : employmentType key
  * return readable employment type 
  */
const updateEmploymentType = emplyomentType => {
    switch(emplyomentType) {
        case "full_time":
            return "Full Time";
        case "part_time":
            return "Part Time";
        default:
            return "Full Time";
    }
}

/**
 * 
 * @param {*} oldData : old jobList array
 * returns empty array if null or new array will manipulated job object
 */
export const updateJobObject = oldData => {
    if(!oldData){
        return [];
    }
    return oldData.jobs.map((job) => ({
        ...job,
        "emplyoment_type" : updateEmploymentType(job.emplyoment_type)
    }))
}


