import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnquiryService } from 'src/app/shared/enquiry.service';
import { ToastrService } from 'ngx-toastr';
import { Enquiry } from 'src/app/shared/enquiry.model';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styles: [
  ]
})
export class EnquiryFormComponent implements OnInit {

  constructor(public service: EnquiryService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEnquiry().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Enquiry Register')
      },
      err => { console.log(err); }
    );
  }
  updateRecord(form: NgForm) {
    this.service.putEnquiry().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Enquiry Register')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Enquiry();
  }

}

