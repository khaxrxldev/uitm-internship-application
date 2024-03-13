const domain: string = 'http://localhost:';
// ! NGROK Deployment
// const common_domain: string = 'https://03c6-2001-f40-99e-1f6-dc7-3c76-13a0-dd18.ngrok-free.app';
// const core_domain: string = 'https://cba1-2001-f40-99e-1f6-dc7-3c76-13a0-dd18.ngrok-free.app';
// const user_domain: string = 'https://54ae-2001-f40-99e-1f6-dc7-3c76-13a0-dd18.ngrok-free.app';
const common_domain: string = 'https://uitm-intern-common-service.azurewebsites.net/intern-common-service';
const core_domain: string = 'https://uitm-intern-core-service.azurewebsites.net/intern-core-service';
const user_domain: string = 'https://uitm-intern-user-service.azurewebsites.net/intern-user-service';

let intern_common_service_port: number = 8081;
export const intern_common_service = {
  production: false,
  // ! RUN LOCALLY
  // company: `${domain}${intern_common_service_port}/common/company`,
  // companies: `${domain}${intern_common_service_port}/common/companies`,
  // question: `${domain}${intern_common_service_port}/common/question`,
  // questions: `${domain}${intern_common_service_port}/common/questions`,
  // semester: `${domain}${intern_common_service_port}/common/semester`,
  // semesters: `${domain}${intern_common_service_port}/common/semesters`,
  // studentSemester: `${domain}${intern_common_service_port}/common/student/semester`,
  // studentsSemesters: `${domain}${intern_common_service_port}/common/students/semesters`,
  company: `${common_domain}/common/company`,
  companies: `${common_domain}/common/companies`,
  question: `${common_domain}/common/question`,
  questions: `${common_domain}/common/questions`,
  semester: `${common_domain}/common/semester`,
  semesters: `${common_domain}/common/semesters`,
  studentSemester: `${common_domain}/common/student/semester`,
  studentsSemesters: `${common_domain}/common/students/semesters`
}

export const intern_common_reactive_service = {
  production: false,
  // ! RUN LOCALLY
  // company: `${domain}${intern_common_service_port}/common/reactive/company`,
  // companies: `${domain}${intern_common_service_port}/common/reactive/companies`,
  company: `${common_domain}/common/reactive/company`,
  companies: `${common_domain}/common/reactive/companies`
}

let intern_core_service_port: number = 8082;
export const intern_core_service = {
  production: false,
  // ! RUN LOCALLY
  // application: `${domain}${intern_core_service_port}/core/application`,
  // applications: `${domain}${intern_core_service_port}/core/applications`,
  // criteria: `${domain}${intern_core_service_port}/core/criteria`,
  // criterias: `${domain}${intern_core_service_port}/core/criterias`,
  // evaluation: `${domain}${intern_core_service_port}/core/evaluation`,
  // evaluations: `${domain}${intern_core_service_port}/core/evaluations`,
  // evaluationQuestion: `${domain}${intern_core_service_port}/core/evaluation/question`,
  // evaluationsQuestions: `${domain}${intern_core_service_port}/core/evaluations/questions`,
  // result: `${domain}${intern_core_service_port}/core/result`,
  // results: `${domain}${intern_core_service_port}/core/results`,
  // studentEvaluation: `${domain}${intern_core_service_port}/core/student/evaluation`,
  // studentsEvaluations: `${domain}${intern_core_service_port}/core/students/evaluations`,
  application: `${core_domain}/core/application`,
  applications: `${core_domain}/core/applications`,
  criteria: `${core_domain}/core/criteria`,
  criterias: `${core_domain}/core/criterias`,
  evaluation: `${core_domain}/core/evaluation`,
  evaluations: `${core_domain}/core/evaluations`,
  evaluationQuestion: `${core_domain}/core/evaluation/question`,
  evaluationsQuestions: `${core_domain}/core/evaluations/questions`,
  result: `${core_domain}/core/result`,
  results: `${core_domain}/core/results`,
  studentEvaluation: `${core_domain}/core/student/evaluation`,
  studentsEvaluations: `${core_domain}/core/students/evaluations`
}

let intern_user_service_port: number = 8083;
export const intern_user_service = {
  production: false,
  // ! RUN LOCALLY
  // academicSupervisor: `${domain}${intern_user_service_port}/user/academic/supervisor`,
  // academicSupervisors: `${domain}${intern_user_service_port}/user/academic/supervisors`,
  // industrySupervisor: `${domain}${intern_user_service_port}/user/industry/supervisor`,
  // industrySupervisors: `${domain}${intern_user_service_port}/user/industry/supervisors`,
  // user: `${domain}${intern_user_service_port}/user`,
  // supervisor: `${domain}${intern_user_service_port}/user/supervisor`,
  // supervisors: `${domain}${intern_user_service_port}/user/supervisors`,
  // student: `${domain}${intern_user_service_port}/user/student`,
  // students: `${domain}${intern_user_service_port}/user/students`,
  academicSupervisor: `${user_domain}/user/academic/supervisor`,
  academicSupervisors: `${user_domain}/user/academic/supervisors`,
  industrySupervisor: `${user_domain}/user/industry/supervisor`,
  industrySupervisors: `${user_domain}/user/industry/supervisors`,
  user: `${user_domain}/user`,
  supervisor: `${user_domain}/user/supervisor`,
  supervisors: `${user_domain}/user/supervisors`,
  student: `${user_domain}/user/student`,
  students: `${user_domain}/user/students`
}

export const intern_user_reactive_service = {
  production: false,
  // ! RUN LOCALLY
  // academicSV: `${domain}${intern_user_service_port}/user/reactive/academic/supervisor`,
  // academicSVs: `${domain}${intern_user_service_port}/user/reactive/academic/supervisors`,
  // industrySV: `${domain}${intern_user_service_port}/user/reactive/industry/supervisor`,
  // industrySVs: `${domain}${intern_user_service_port}/user/reactive/industry/supervisors`,
  // student: `${domain}${intern_user_service_port}/user/reactive/student`,
  // students: `${domain}${intern_user_service_port}/user/reactive/students`,
  academicSV: `${user_domain}/user/reactive/academic/supervisor`,
  academicSVs: `${user_domain}/user/reactive/academic/supervisors`,
  industrySV: `${user_domain}/user/reactive/industry/supervisor`,
  industrySVs: `${user_domain}/user/reactive/industry/supervisors`,
  student: `${user_domain}/user/reactive/student`,
  students: `${user_domain}/user/reactive/students`
}