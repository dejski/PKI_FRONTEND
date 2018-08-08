import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  searchUserForm: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchUserForm = this.buidSearchUserForm()
  }

  buidSearchUserForm() {
    return this.formBuilder.group({
      nazwisko: ['', Validators.minLength(3)],
      pesel: ['', [Validators.minLength(11), Validators.maxLength(11)]],
      login: ['', [Validators.minLength(11), Validators.maxLength(11)]],
    })
  }
}
