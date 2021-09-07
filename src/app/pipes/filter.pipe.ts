import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string): any {
    
    if(value.lenght ===0 || search === ''){
      return value;
    }

    const articles =[];
    for ( const article of value){
      if (article['title'] === search){
      articles.push(article);
    }
  }
  return articles;
  }

}
