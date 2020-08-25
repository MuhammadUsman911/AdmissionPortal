const CourseSchema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  
    courseRegistration: {
      courseList: {
        type: Number,
        required: true,
      },
      
      courseDescription: {
        type: String,
        
      },
     
      courseCreditHours: {
        type: String,
      },
      coursePrerequisites: {
        type: String,
      },
      complusoryCourses: {
        type: String,
      },
      electiveCourses: {
        type: Date,
      },
      failedCouses: {
        type: String,
      },
      dropCouse: {
        type: String,
      },
      withdrawCourse: {
        type: String,
      },
    },
  });