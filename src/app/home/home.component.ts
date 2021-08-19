import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Phong';
  public age = 20;
   public TRAICAY = ['Trái cây 1', 'Trái cây 2'];
   public TRAICAY2 = [
                      {ten: 'Trái cây 1', dongia:10, hagia:true}
                      , {ten: 'Trái cây 3', dongia:20, hagia:false}
                      , {ten: 'Trái cây 5', dongia:40, hagia:true}
                      , {ten: 'Trái cây 8', dongia:60, hagia:false}
                    ];

  
  public DanhSachThanhPho = [
    {
      MaThanhPho:1
      , TenThanhPho:'Hồ Chí Minh'
      , DanhSachQuan:[{
                        MaQuan:'1'
                        , TenQuan:'Quận 1'
                      }
                      , {
                        MaQuan:'2'
                        , TenQuan:'Quận 2'
                      }
                    ]
    }
    , {
      MaThanhPho:2
      , TenThanhPho:'Hà Nội'
      , DanhSachQuan:[{
                        MaQuan:'11'
                        , TenQuan:'Quận Hoàn Kiếm'
                      }
                      , {
                        MaQuan:'12'
                        , TenQuan:'Quận Cầu Giấy'
                      }
                    ]
    }                    
  
  ]

  public DanhSachQuan: any[] = []
   

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  public ResetName() : void
  {
    console.log('ResetName');
    this.name = '';
  }


  onOptionsSelected(value:any){
    console.log("the selected value is " + value);
    var MaThanhPhoChon: number = +value;
    const searchThanhPho = this.DanhSachThanhPho.filter(x => x.MaThanhPho === MaThanhPhoChon);
    
    this.DanhSachQuan = searchThanhPho[0].DanhSachQuan;
  }


}


