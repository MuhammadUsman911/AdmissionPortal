const AuditsSchema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },

    fee: {
        feeStructure: {
            type: String
        },
        totalsubmittedFee: {
            type: String
        },

        semesterFee: {
            type: String
        },

        examsFee: {
            type: String
        },

        migrationFee: {
            type: String
        },
        lateFeeSubmissionFine: {
            type: String
        },

        certificateFee: {
            type: String
        },

        admissionFee: {
            type: String
        },
        paidFee: {
            type: String
        },

        ouststandingFee: {
            type: String
        },

        refundFee: {
            type: String
        },

    },
    
    
  });