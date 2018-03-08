import { Owner } from './owner';
export class Repository {
    id: number;
    name: string;
    full_name: string;
    owner: Owner;
    private: boolean;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    created_at: Date;
    updated_at: Date;
    pushed_at: Date;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    forks_count: number;
    open_issues_count: number;
    master_branch: string;
    default_branch: string;
    score: number;
}