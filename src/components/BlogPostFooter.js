import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

export default class BlogPostFooter extends React.Component {
    render() {
        let post = _.get(this.props, 'page', null);
        let date_type = _.get(this.props, 'date_type', null);
        return (
            <footer className="post-meta">
                <time className="published" dateTime={moment(_.get(post, 'date', null)).strftime('%Y-%m-%d %H:%M')}>{(date_type === 'short') ? (moment(_.get(post, 'date', null)).strftime('%B %d, %Y')) : moment(_.get(post, 'date', null)).strftime('%A, %B %e, %Y')}</time>{_.get(post, 'author', null) && ((() => {    let author = _.get(post, 'author', null);    return (', by ' + author.first_name  + author.last_name);})())}
            </footer>
        );
    }
}
