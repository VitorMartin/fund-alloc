import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { key } from 'src/app/common/global_values';

@Component({
  selector: 'app-changes-page',
  templateUrl: './changes-page.component.html',
  styleUrls: ['./changes-page.component.css']
})
export class ChangesPageComponent implements OnInit {
  ccbs: string[] = []
  kolds: string[] = []
  form_ccb: string
  form_kold: string
  override: boolean = false
  override_ccb: string
  override_kold: string

  constructor(private api: ApiService) {
  }

  async ngOnInit(): Promise<void> {
    this.ccbs = []
    const desembs_data: any = await this.api.get_desembs_observable().toPromise()
    desembs_data[key.desembs].forEach((desemb: any) => {
      if ( ! desemb[key.fund] ) {
        this.ccbs.push(desemb[key.ccb])
      }
    });
  }
  
  async ccb_selection_change_handler(ccb: string) {
    this.kolds = []
    this.form_kold = ''
    const data: any = await this.api.get_avail_funds(ccb).toPromise()
    data[key.funds].forEach((fund: any) => {
      this.kolds.push(fund[key.kold])
    })
    this.kolds.sort()
  }

  async confirm_btn_handler(ccb: string, kold: string, override: boolean = false) {
    await this.api.change_fund(ccb, kold, override).toPromise();
    window.location.reload();
  }
}
