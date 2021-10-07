import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'categoryfilter',
    pure: false
})
export class CategoryFilterPipe implements PipeTransform {
    transform(items: any[], category: string): any {
        if (!items) {
            return items;
        }
        if (category === 'All') {
            return items;
        } else {
            return items.filter(item => item.category === category);
        }
    }
}