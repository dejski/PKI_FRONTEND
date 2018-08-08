import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

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
      nazwisko: '',
      pesel: '',
      login: '',
    })
  }
}
