import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPostForm from './BlogPostForm';
import CouponForm from './CouponForm';
import BlogPostList from './BlogPostList';
import CouponList from './CouponList';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BetaPreOrderForm from './components/BetaPreOrderForm';
import PasswordResetRequest from './components/PasswordResetRequest';
import PasswordReset from './components/PasswordReset';
import BlogPostForm from './components/BlogPostForm';
import BlogPostList from './components/BlogPostList';
import BookingForm from './components/BookingForm';
import MeetingList from './components/MeetingList';
import UserProfile from './components/UserProfile';
import Notifications from './components/Notifications';
import Transactions from './components/Transactions';
import RecurringTransactions from './components/RecurringTransactions';
import AuditLogs from './components/AuditLogs';
import CurrencySelector from './components/CurrencySelector';
import EmailTemplateManager from './components/EmailTemplateManager';
import ReferralForm from './components/ReferralForm';
import UserBadges from './components/UserBadges';
import Forum from './components/Forum';
import ExclusiveContent from './components/ExclusiveContent';
import FeedbackProgram from './components/FeedbackProgram';
import Roadmap from './components/Roadmap';
import Onboarding from './components/Onboarding';
import UserDashboard from './components/UserDashboard';
import PreOrderLandingPage from './components/PreOrderLandingPage';
import CheckoutPage from './components/CheckoutPage';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/register" component={BetaPreOrderForm} />
                <Route path="/request-password-reset" component={PasswordResetRequest} />
                <Route path="/reset-password/:token" component={PasswordReset} />
                <Route path="/blogpost-form" component={BlogPostForm} />
                <Route path="/blogpost-list" component={BlogPostList} />
                <Route path="/booking-form" component={BookingForm} />
                <Route path="/meeting-list" component={MeetingList} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/transactions" component={Transactions} />
                <Route path="/recurring-transactions" component={RecurringTransactions} />
                <Route path="/audit-logs" component={AuditLogs} />
                <Route path="/currency-selector" component={CurrencySelector} />
                <Route path="/email-template-manager" component={EmailTemplateManager} />
                <Route path="/referral-form" component={ReferralForm} />
                <Route path="/badges" component={UserBadges} />
                <Route path="/forum" component={Forum} />
                <Route path="/exclusive-content" component={ExclusiveContent} />
                <Route path="/feedback-program" component={FeedbackProgram} />
                <Route path="/roadmap" component={Roadmap} />
                <Route path="/onboarding" component={Onboarding} />
                <Route path="/dashboard" component={UserDashboard} />
                <Route path="/landing" component={PreOrderLandingPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/" exact component={PreOrderLandingPage} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/blogpost/new" component={BlogPostForm} />
                <Route path="/coupons/new" component={CouponForm} />
                <Route path="/blogposts" component={BlogPostList} />
                <Route path="/coupons" component={CouponList} />
            </Switch>
        </Router>
    );
}

export default App;