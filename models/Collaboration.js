const CollaborationSchema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  
    createGroup: {
      groupName: {
        type: Number,
        required: true,
      },
      
      addMembers: {
        type: String,
        required: true,
      },
     
      shareFiles: {
        type: String,
      },
     
    },
  });