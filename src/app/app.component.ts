import { Component, VERSION } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(
    private title: Title,  
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle("Example of SEO Meta Tag using Angular"); 

    this.meta.addTags([  
      { name: 'keywords', content: 'Angular SEO Title, Meta Description, Meta Keyword Example' },  
      { name: 'robots', content: 'index, follow' },  
      { name: 'writer', content: 'John Smith' },  
      { name: 'image', content: './assets/blog-image.png' },  
      { charset: 'UTF-8' }  
    ]); 

    this.meta.updateTag({ name: 'title', content: '' });
    this.meta.updateTag({ name: 'keywords', content: 'Lorem ipsum dolor' });
    this.meta.updateTag({ name: 'image', content: './assets/blog-image.jpg' });

    const writer = this.meta.getTag('name=writer');  
    console.log(writer.content); //John Smith  

    this.meta.removeTag('name="writer"');  
  }
}
