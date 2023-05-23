import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  http = inject(HttpClient);
  // constructor(private http: HttpClient) { }

  // the return type can be avoided - just there to show the antipattern
  getSkills(): Observable<Skill[]> {
    return this.http
      .get<Skill[]>(`${environment.api}skills`)
      .pipe(tap((data) => console.log('Received skills:', data)));
  }

  getSkillById(id: number) {
    return this.http.get<Skill>(`${environment.api}skills/${id}`);
  }

  addSkill(skill: Skill) {
    return this.http.post<Skill>(`${environment.api}skills`, skill);
  }

  updateSkill(skill: Skill) {
    return this.http.put<Skill>(
      `${environment.api}skills/${skill.id}`,
      skill
    );
  }

  deleteSkill(skill: Skill) {
    return this.http.delete<Skill>(
      `${environment.api}skills/${skill.id}`
    );
  }
}
