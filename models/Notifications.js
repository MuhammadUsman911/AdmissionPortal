const NotificationsAndCollaborationSchema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  
    createTeams: {
      teamName: {
        type: Number,
        required: true,
      },
      
      addmembers: {
        type: String,
        required: true,
        
      },
     
      inviteMembers: {
        type: String,
      },
    },

    notificationss: { 
      newsMessages: {
        type: String,
      },
      teamInvites: {
        type: String,
      },
      updates: {
        type: Date,
      },
      examsSchedule: {
        type: String,
      },
      oppurtunities: {
        type: String,
      },

    },

    jobPosting: {
      jobName: {
        type: String,
        required: true,
      },
      jobDescription: {
        type: String,
        required: true,
      },
      skills: {
          type: String,
      },
      experience: {
        type: String,
      },

    },
  });