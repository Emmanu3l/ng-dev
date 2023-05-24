import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { Skill } from '../skill.model';
import { SkillsService } from '../skills.service';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss'],
})

export class SkillsEditComponent implements OnInit {
  skill: Skill = new Skill();
  isReadOnly = false;

  constructor(
    private service: SkillsService,
    private route: ActivatedRoute,
    private router: Router,
    private sns: SnackbarService
  ) { }

  ngOnInit(): void {
    this.readParamUsingSnapshot();
    // this.readParamUsingParamMap();
    // this.readParamUsingResolver();
    // this.readParamUsingResolverObs();
  }

  getSkill(id: number) {
    this.service.getSkill(id).subscribe((data) => {
      if (data) {
        this.skill = data;
        console.log('setting skill: ', data);
      }
    });
  }

  /* #region params */
  readParamUsingSnapshot() {
    // get id param -> load data with id
    const id = this.route.snapshot.params['id'];
    this.getSkill(id);

    // query params
    this.isReadOnly = this.route.snapshot.queryParams['readonly'];
    if (this.isReadOnly != null) {
      console.log(`Page is readonly: ${this.isReadOnly}`);
    }
    const clientid = this.route.snapshot.queryParams['clientid'];
    if (clientid) {
      console.log(`clientid: ${clientid}`);
    }

    // fragments
    const fragments = this.route.snapshot.fragment;
    if (fragments != undefined) {
      console.log(`Section to navigate to: ${fragments}`);
    }

    //state
    const state = history.state.data;
    if (state != null) {
      console.log('state: ', state);
    }
  }

  readParamUsingParamMap() {
    // id param
    this.route.paramMap.subscribe((params) => {
      console.log('paramMap:', params);
    });
    // query params
    this.route.queryParamMap.subscribe((qpm) => {
      console.log('paramMap:', qpm);
      const readonly = qpm.get('readonly') === 'true';
    });
    // fragments
    this.route.fragment.subscribe((fr) => {
      console.log('paramMap:', fr);
      const fragment = fr;
    });
  }

  readParamUsingResolver() {
    this.skill = this.route.snapshot.data['skillData'];
  }

  readParamUsingResolverObs() {
    this.route.data.subscribe((data) => {
      this.skill = data['skillData'];
    });
  }

  /* #endregion */

  saveSkill() {
    this.sns.displayAlert('Warning', 'Save not implemented');
  }

  doCancel() {
    this.router.navigate(['/skills']);
  }
}
