#### Survey Application based on Angular and .Net Core API(hosted on Azure as App service)
The users of the application can create surveys and share them with the world to take everyones opinion abouth any thematic. The chart visualization is real time and the data is stored to MSSQL database.

URL: https://zhpsurveys2020.z6.web.core.windows.net/

```bash
username: petkov
password: 123123
```


![](http://g.recordit.co/Xmwb1cCACq.gif)

## Used
- Charts visualization - ng-apexcharts
- Routing
- Resolvers, AuthGuards
- Observablex - rxjs
- Bootstrap

## Authorization
### Normal User
* Create survey
* Vote in another surveys

### Administrator
* Add categories
* Edit categories
* Edit surveys
* Delete categories
* Delete surveys
