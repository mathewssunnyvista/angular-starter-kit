import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/shared/enquiry.service';
import { ToastrService } from 'ngx-toastr';
import { Enquiry } from '../shared/enquiry.model';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  constructor(public service: EnquiryService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: Enquiry) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEnquiry(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Enquiry');
          },
          err => { console.log(err) }
        )
    }
  }

}
