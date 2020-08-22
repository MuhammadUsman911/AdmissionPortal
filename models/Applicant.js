const mongoose = require('mongoose');

const ApplicantSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },

  category: {
    type: Number,
  },
  status: {
    type: Number,
    default: 0,
  },

  personalDetails: {
    name: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    cnic: {
      id: {
        type: String,
      },
      frontPic: {
        type: String,
      },
      backPic: {
        type: String,
      },
    },
    homeAddress: {
      type: String,
    },
    domicile: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    phoneNumber: {
      type: String,
    },
    birthPlace: {
      type: String,
    },
  },
  incomeDetails: {
    monthlyIncome: {
      type: Number,
    },
    minimumYearlyIncome: {
      type: Number,
    },
  },
  educationDetails: {
    // Here is the details of the secondary education
    secondaryEducationDetails: {
      type: {
        type: Number,
      },
      institute: {
        type: String,
      },
      fieldOfStudy: {
        type: String,
      },
      from: {
        type: Number,
      },
      to: {
        type: Number,
      },
      obtainedMarks: {
        type: Number,
      },
      totalMarks: {
        type: Number,
      },
      picture: {
        type: String,
      },
    },
    // Here is the details of the intermediate education
    intermediateEducationDetails: {
      type: {
        type: Number,
      },
      institute: {
        type: String,
      },
      fieldOfStudy: {
        type: String,
      },
      from: {
        type: Number,
      },
      to: {
        type: Number,
      },
      obtainedMarks: {
        type: Number,
      },
      totalMarks: {
        type: Number,
      },
      picture: {
        type: String,
      },
    },

    // For graduate student
    bachelorEducationDetails: {
      institute: {
        type: String,
      },
      fieldOfStudy: {
        type: String,
      },
      from: {
        type: Number,
      },
      to: {
        type: Number,
      },
      cgpa: {
        type: Number,
      },
      picture: {
        type: String,
      },
    },
    ntsMarks: {
      type: Number,
    },
  },

  //   appliedPrograms: [
  //     {
  //       programme: {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: 'programme',
  //       },
  //     },
  //   ],
  program: {
    name: {
      type: String,
      required: true,
    },
    timePeriod: {
      type: number,
      required: true,
    },
  },

  //   timeStamp: {
  //     type: Date,
  //     default: Date.now(),
  //   },
  //   applicantVerified: {
  //     type: Boolean,
  //     default: false,
  //   },
  applicantFowaraded: {
    type: Boolean,
    default: false,
  },
});

module.exports = Applicant = mongooose.model('applicant', ApplicantSchema);
