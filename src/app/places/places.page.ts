import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  places = [
    {
      title: "น้ำตกห้วยแม่ขมิ้น",
      image: "https://s.isanook.com/tr/0/rp/r/w670/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3RyLzAvdWQvMjgzLzE0MTU1OTMvOS00LmpwZw==.jpg",
      detail: `หนึ่งในน้ำตกที่ขึ้นชื่อว่าเป็นน้ำตกที่สวยเป็นอันดับต้น ๆ ในประเทศไทย มีสายน้ำตกไหลผ่านลงมาเป็นดั่งม่านน้ำ รายล้อมไปด้วยธรรมชาติสีเขียวที่ร่มรื่นและสวยงาม ภายในประกอบไปด้วยน้ำตก 7 ชั้น ได้แก่ ชั้นว่านดง ม่านขมิ้น วังหน้าผา ฉัตรแก้ว ไหลจนหลง ดงผีเสื้อ และร่มเกล้า`
    },
    {
      title: "น้ำตกเอราวัณ",
      image: "https://s.isanook.com/tr/0/rp/r/w670/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3RyLzAvdWQvMjgzLzE0MTU1OTMvNy00LmpwZw==.jpg",
      detail: `สวรรค์ขั้น 7 แห่งจังหวัดกาญจนบุรี ที่มีความสวยงามไม่น้อยกว่าน้ำตกห้วยแม่ขมิ้นเลยทีเดียว ชมลำธารสีเชียวมรกต ท่ามกลางธรรมชาติที่อุดมสมบูรณ์ ภายในประกอบด้วยน้ำตก 7 ชั้น ซึ่งแต่ละชั้นก็จะมีความสวยงามที่แตกต่างกันออกไป จนได้รับชื่อว่าเป็น “สวรรค์ชั้น 7 แห่งน้ำตกเมืองกาญ”`
    },
    {
      title: "น้ำตกสีฟ้าเขียวมรกต",
      image: "https://s359.kapook.com/pagebuilder/625756f4-d02b-4db2-b392-10d12e9aabb7.jpg",
      detail: `น้ำตกห้วยแม่ขมิ้น ตั้งอยู่ที่ตำบลท่ากระดาน อำเภอศรีสวัสดิ์ จังหวัดกาญจนบุรี ภายในอุทยานแห่งชาติเขื่อนศรีนครินทร์ มีลักษณะเป็นน้ำตกขนาดใหญ่ เกิดจากลำห้วยแม่ขมิ้นที่ไหลผ่านเทือกเขาหินปูนลดหลั่นลงมาเป็นชั้น ๆ มีทั้งหมด 7 ชั้น ระยะทางรวม 2,270 เมตร โดยน้ำในน้ำตกจะมีสีเขียวมรกตสวยใส เห็นได้ชัดในบริเวณแอ่งน้ำกว้างของแต่ละชั้น บรรยากาศโดยรอบงดงาม เต็มไปด้วยต้นไม้น้อยใหญ่สีเขียว ร่มรื่น อากาศเย็นสบายสดชื่น มีเส้นทางศึกษาธรรมชาติให้ได้เดินเที่ยวชม เปิดให้เข้าเที่ยวชมทุกวัน ตั้งแต่เวลา 08.00-17.00 น. ค่าธรรมเนียมคนไทย ผู้ใหญ่ 100 บาท เด็ก 50 บาท ชาวต่างชาติ ผู้ใหญ่ 300 บาท เด็ก 200 บาท ดูรายละเอียดเพิ่มเติมได้ที่ park.dnp.go.th`
    },
  ];
  constructor(
    private router: Router
  ) { }
  ngOnInit() {

  }
  goToPlace(place) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        place: JSON.stringify(place)
      }
    };
    this.router.navigate(['/place'], navigationExtras);
  }

}
