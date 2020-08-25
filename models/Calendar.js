const CalendarSchema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },

    timetable: {
        classTimetable: {
            type: String
        },

        examsTimetable: {
            type: String
        },

        semesterCalendar: {
            type: String
        },

        feeInvoices: {
            type: String
        },

    },
    
    deadlines: {
      feeSubmissionDeadline: {
        type: String,
      },
      
      courseRegistrationDeadline: {
        type: String,
        
      },
     
      courseWithdrawalDeadline: {
        type: String,
      },
      courseDropDeadline: {
        type: String,
      },
      AssignmentsDeadline: {
        type: String,
      },
      projetsDeadline: {
        type: String,
      },
      
    },
  });