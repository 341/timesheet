import Component from '@ember/component';
import moment from 'moment';
import { get, computed } from '@ember/object';

export default Component.extend({
    year: 2019,
    month: 1,
    tagName: 'tbody',
    days: computed('month', function(){
        let year = get(this,'year');
        let month = get(this,'month');
        console.log(month);
        let contcat = `${year}-${month}`;

        let days  =  moment(contcat, "YYYY-MM").daysInMonth();

        let _days = [];

        for (let i = 1; i <= days; i++) {
            let _year = get(this,'year');
            let _month = get(this,'month');
            //let _day = get(this, i);

            let _contcat = `${_year}-${_month}-${i}`;

            _days.push(moment(_contcat, "YYYY-MM-DD").format('DD dddd'));
        }

        return _days;
    })
});
