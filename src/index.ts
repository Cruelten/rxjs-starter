import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';


forkJoin(
    {
        rxjs: ajax.getJSON('https://api.github.com/search/repositories?q=rxjs'),
        nodejs: ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs')
    }
)
    //rxjs and nodejs
    .subscribe(console.log);