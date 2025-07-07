/**
 * Workflow Orchestrator for Pre-Planning
 * Manages the complete user workflow from start to implementation plan
 */

class WorkflowOrchestrator {
  constructor() {
    this.sessions = new Map(); // In production, this would be persisted
  }

  /**
   * Start a new pre-planning workflow
   */
  startWorkflow(sessionId, type, name, project = null) {
    const session = {
      id: sessionId,
      type: type, // 'module' or 'feature'
      name: name,
      project: project,
      step: 'questions',
      answers: {},
      evaluation: null,
      plan: null,
      startTime: new Date(),
      lastActivity: new Date()
    };

    this.sessions.set(sessionId, session);
    return this.getNextStep(sessionId);
  }

  /**
   * Get the next step in the workflow
   */
  getNextStep(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) {
      return { error: 'Session not found. Please start a new workflow.' };
    }

    session.lastActivity = new Date();

    switch (session.step) {
      case 'questions':
        return this.getQuestionsStep(session);
      case 'evaluation':
        return this.getEvaluationStep(session);
      case 'refinement':
        return this.getRefinementStep(session);
      case 'planning':
        return this.getPlanningStep(session);
      case 'complete':
        return this.getCompletionStep(session);
      default:
        return { error: 'Unknown workflow step' };
    }
  }

  /**
   * Submit answers and advance workflow
   */
  submitAnswers(sessionId, answers) {
    const session = this.sessions.get(sessionId);
    if (!session) {
      return { error: 'Session not found' };
    }

    // Merge new answers with existing ones
    session.answers = { ...session.answers, ...answers };
    
    // Check if all required questions are answered
    const missingRequired = this.getMissingRequiredQuestions(session);
    if (missingRequired.length > 0) {
      return {
        step: 'questions',
        message: `Please answer the following required questions: ${missingRequired.join(', ')}`,
        missingQuestions: missingRequired,
        currentAnswers: session.answers
      };
    }

    // Move to evaluation step
    session.step = 'evaluation';
    return this.getNextStep(sessionId);
  }

  /**
   * Get questions step
   */
  getQuestionsStep(session) {
    return {
      step: 'questions',
      type: session.type,
      name: session.name,
      project: session.project,
      message: `Let's plan your ${session.type}: "${session.name}"${session.project ? ` for project "${session.project}"` : ''}`,
      instruction: 'Please answer the following questions thoroughly. Use the guidance and examples provided.',
      nextAction: 'Submit your answers when complete',
      currentAnswers: session.answers
    };
  }

  /**
   * Get evaluation step
   */
  getEvaluationStep(session) {
    // This would call the evaluation logic
    const evaluation = this.evaluateAnswers(session.answers, session.type);
    session.evaluation = evaluation;

    if (evaluation.score >= 3.5) {
      session.step = 'planning';
      return {
        step: 'evaluation',
        message: `Excellent work! Your ${session.type} planning scored ${evaluation.score}/5.0`,
        evaluation: evaluation,
        nextAction: 'Proceeding to generate implementation plan',
        autoAdvance: true
      };
    } else {
      session.step = 'refinement';
      return {
        step: 'evaluation',
        message: `Your ${session.type} planning needs improvement. Score: ${evaluation.score}/5.0`,
        evaluation: evaluation,
        nextAction: 'Please refine your answers based on the feedback',
        canProceed: false
      };
    }
  }

  /**
   * Get refinement step
   */
  getRefinementStep(session) {
    return {
      step: 'refinement',
      message: 'Please improve your answers based on the evaluation feedback',
      evaluation: session.evaluation,
      currentAnswers: session.answers,
      nextAction: 'Submit refined answers for re-evaluation'
    };
  }

  /**
   * Get planning step
   */
  getPlanningStep(session) {
    // Generate implementation plan
    const plan = this.generatePlan(session.answers, session.type, session.evaluation.score);
    session.plan = plan;
    session.step = 'complete';

    return {
      step: 'planning',
      message: `Implementation plan generated for ${session.name}`,
      plan: plan,
      nextAction: 'Review the plan and begin implementation'
    };
  }

  /**
   * Get completion step
   */
  getCompletionStep(session) {
    return {
      step: 'complete',
      message: `Pre-planning workflow complete for ${session.name}`,
      summary: {
        type: session.type,
        name: session.name,
        project: session.project,
        score: session.evaluation.score,
        planGenerated: !!session.plan,
        timeSpent: Math.round((new Date() - session.startTime) / 1000 / 60) + ' minutes'
      },
      plan: session.plan,
      nextActions: [
        'Begin implementing according to the plan',
        'Set up project structure',
        'Create development tasks',
        'Assign team members'
      ]
    };
  }

  /**
   * Get workflow status
   */
  getStatus(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) {
      return { error: 'Session not found' };
    }

    return {
      sessionId: session.id,
      type: session.type,
      name: session.name,
      project: session.project,
      step: session.step,
      progress: this.calculateProgress(session),
      answeredQuestions: Object.keys(session.answers).length,
      evaluationScore: session.evaluation?.score || null,
      timeSpent: Math.round((new Date() - session.startTime) / 1000 / 60) + ' minutes'
    };
  }

  /**
   * Helper methods
   */
  getMissingRequiredQuestions(session) {
    // This would check against the question templates
    // For now, return empty array - would be implemented with actual question loading
    return [];
  }

  evaluateAnswers(answers, type) {
    // Simplified evaluation - in real implementation would use the actual evaluation logic
    const answerCount = Object.keys(answers).length;
    const score = Math.min(5, answerCount * 0.5);
    return {
      score: score,
      level: score >= 4.5 ? 'excellent' : score >= 3.5 ? 'good' : 'needs_improvement',
      feedback: `${answerCount} questions answered`
    };
  }

  generatePlan(answers, type, score) {
    // Simplified plan generation
    return {
      title: `${answers.purpose || answers.feature_description || 'Implementation'} Plan`,
      sections: [
        'Project Setup',
        'Core Implementation', 
        'Testing & Validation',
        'Deployment & Monitoring'
      ],
      estimatedTime: type === 'module' ? '4-8 weeks' : '1-3 weeks',
      confidence: score >= 4.5 ? 'high' : score >= 3.5 ? 'medium' : 'low'
    };
  }

  calculateProgress(session) {
    const steps = ['questions', 'evaluation', 'refinement', 'planning', 'complete'];
    const currentIndex = steps.indexOf(session.step);
    const maxIndex = session.evaluation && session.evaluation.score < 3.5 ? 4 : 3; // Account for refinement step
    return Math.round((currentIndex / maxIndex) * 100);
  }

  /**
   * Clean up old sessions
   */
  cleanupSessions() {
    const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours
    for (const [sessionId, session] of this.sessions) {
      if (session.lastActivity < cutoff) {
        this.sessions.delete(sessionId);
      }
    }
  }
}

module.exports = WorkflowOrchestrator;