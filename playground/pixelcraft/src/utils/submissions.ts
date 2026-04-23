export interface ContactSubmission {
  name: string;
  email: string;
  company: string;
}

const submissions: ContactSubmission[] = [];

export function addSubmission(submission: ContactSubmission) {
  submissions.push(submission);
}

export function listSubmissions() {
  return submissions;
}
