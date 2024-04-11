import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';
import { environment } from '../environments/environment.development';
import { Repos } from './interfaces/repos';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  async getAllRepos(): Promise<Repos[]> {
    const octokit = new Octokit({
      auth: environment.TOKEN_API
    });

    const dataOctokit = await octokit.request("GET /users/{owner}/repos", {
      owner: environment.GITHUB_OWNER
    });
    const reposResult: Repos[] = dataOctokit.data;
    return (reposResult) ?? [];
  }

  async getAllLanguages(repo: string): Promise<{ name: string, value: number }[]> {
    const octokit = new Octokit({
      auth: environment.TOKEN_API
    });

    const dataOctokit = await octokit.request("GET /repos/{owner}/{repo}/languages", {
      owner: environment.GITHUB_OWNER,
      repo: repo
    });

    const languagesArray = Object.entries(dataOctokit.data ?? {}).map(([name, value]) => ({ name, value }));

    return languagesArray;
  }
}
