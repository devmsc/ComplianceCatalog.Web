import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:44305/',
    withCredentials: true
})

export const authAPI = {
    me() {
        return instance.get(`auth`).then(response => response.data);
    }
}

export const questionsAPI = {
    getQuestions() {
        return instance.get(`questions`).then(response => response.data.data)
    },
    createQuestion(question)  {
        return instance.post(`questions`, question).then(response => response.data.data);
    },
    getQuestion(id) {
        return instance.get(`questions/${id}`).then(response => response.data.data);
    },
    deleteQuestion(id) {
        return instance.delete(`questions/${id}`).then(response => response.data.data);
    }
}

export const relationStagesAPI = {
    getRelationStages() {
        return instance.get(`relationStages`).then(response => response.data.data)
    },
    createRelationStage(question)  {
        return instance.post(`relationStages`, question).then(response => response.data.data);
    },
    getRelationStage(id) {
        return instance.get(`relationStages/${id}`).then(response => response.data.data);
    },
    deleteRelationStage(id) {
        return instance.delete(`relationStages/${id}`).then(response => response.data.data);
    }
}

export const complianceRisksAPI = {
    getComplianceRisks() {
        return instance.get(`complianceRisks`).then(response => response.data.data)
    },
    createComplianceRisk(question)  {
        return instance.post(`complianceRisks`, question).then(response => response.data.data);
    },
    getComplianceRisk(id) {
        return instance.get(`complianceRisks/${id}`).then(response => response.data.data);
    },
    deleteComplianceRisk(id) {
        return instance.delete(`complianceRisks/${id}`).then(response => response.data.data);
    }
}

export const complianceProcessesAPI = {
    getComplianceProcesses() {
        return instance.get(`complianceProcesses`).then(response => response.data.data)
    },
    createComplianceProcess(question)  {
        return instance.post(`complianceProcesses`, question).then(response => response.data.data);
    },
    getComplianceProcess(id) {
        return instance.get(`complianceProcesses/${id}`).then(response => response.data.data);
    },
    deleteComplianceProcess(id) {
        return instance.delete(`complianceProcesses/${id}`).then(response => response.data.data);
    }
}
