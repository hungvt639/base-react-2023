const admin = "/admin";
const employer = "/employer";
const user = "/user";
const route = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  SEND_RESET_PASSWORD: "/auth/send-reset-password",
  RESET_PASSWORD: "/auth/reset-password",

  JOB: "/job",
  JOB_DETAIL: "/job/:slug",
  BLOG: "/blog",

  COMPANY: "/company",
  COMPANY_DETAIL: "/company/:slug",

  ADMIN: {
    home: admin,
    profile: admin + "/profile",
    company: admin + "/company",
    job: admin + "/job",
    user: admin + "/user",
    blog: admin + "/blog",
  },
  EMPLOYER: {
    landing: employer,
    home: employer + "/home",
    register: employer + "/register",
    recruitment: employer + "/recruitment",
    company: employer + "/company",
    employee: employer + "/employee",
    profile: employer + "/profile",
    candidates: employer + "/candidates",
    jobDetail: employer + "/job/:id",
    userApply: employer + "/job/:id/:userId",
    cvApply: employer + "/cv-apply",
  },
  USER: {
    home: user,
    login: user + "/login",
    profile: user + "/profile",
    cv: user + "/cv",
    jobApplied: user + "/job-applied",
    // savedJobs: user + "/saved-jobs",
    likedJob: user + "/liked-jobs",
    recruiterViewedTheProfile: user + "/the-recruiter-viewed-the-profile",
    recruitersAreWatching: user + "/recruiters-are-watching",
  },
};

export default route;
