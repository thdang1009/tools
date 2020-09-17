import { LifeFactor } from '../app/core/models/general-model/life-factor.model';

export class AppSettings {
    static FactorInit = [
        {
            id: 0,
            text: 'CREATIVITY',
            color: '#e0793c',
            score: 50
        },
        {
            id: 1,
            text: 'FINANCES',
            color: '#ed9f3c',
            score: 50
        },
        {
            id: 2,
            text: 'CAREER',
            color: '#f3ce37',
            score: 50
        },
        {
            id: 3,
            text: 'EDUCATION',
            color: '#ece248',
            score: 50
        },
        {
            id: 4,
            text: 'HEALTH',
            color: '#a8c652',
            score: 50
        },
        {
            id: 5,
            text: 'PHYSICAL ACTIVITY',
            color: '#56b455',
            score: 50
        },
        {
            id: 6,
            text: 'HOME COOKING',
            color: '#3fc0c9',
            score: 50
        },
        {
            id: 7,
            text: 'HOME ENVIRONMENT',
            color: '#2c86b5',
            score: 50
        },
        {
            id: 8,
            text: 'RELATIONSHIP',
            color: '#3d4c8b',
            score: 50
        },
        {
            id: 9,
            text: 'SOCIAL LIFE',
            color: '#613e87',
            score: 50
        },
        {
            id: 10,
            text: 'JOY',
            color: '#b23a92',
            score: 50
        },
        {
            id: 11,
            text: 'SPIRITUALITY',
            color: '#d4364a',
            score: 50
        },
    ] as Array<LifeFactor>;
}