import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {ProfileComponent} from './shared/components/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmptyDialogComponent} from './shared/dialogs/empty-dialog/empty-dialog.component';
import {PostComponent} from './shared/components/post/post.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FeedWrapperComponent} from './components/feed-wrapper/feed-wrapper.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FeedComponent} from './shared/components/feed/feed.component';
import {ChatListComponent} from './shared/components/chat-list/chat-list.component';
import {AnnouncementAreaComponent} from './shared/components/announcement-area/announcement-area.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {LogInComponent} from './components/login/login.component';
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
import {ProfileAboutComponent} from './shared/components/profile/profile-about/profile-about.component';
import {ProfileActivityComponent} from './shared/components/profile/profile-activity/profile-activity.component';
import {ProfilePostsComponent} from './shared/components/profile/profile-posts/profile-posts.component';
import {HttpClientModule} from "@angular/common/http";
import {EmployeeRegisterComponent} from './shared/components/employee-register/employee-register.component';
import {ResetPasswordComponent} from "./components/reset-password/reset-password.component";
import {EditProfileComponent} from './shared/components/profile/edit-profile/edit-profile.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {FeedPostsComponent} from './shared/components/feed-posts/feed-posts.component';
import {ChatAreaComponent} from './shared/components/chat-area/chat-area.component';
import {TimeAgoPipe} from "./DTO/TimeAgoPipe";
import {TruncatePipe} from "./DTO/TruncatePipe";
import {TruncateCommentsPipe} from "./DTO/TruncateCommentsPipe";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ConfirmDialogComponent} from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import {PostingOptionsComponent} from './shared/dialogs/posting-options/posting-options.component';
import {MatSelectModule} from "@angular/material/select";
import {PostShareDialogComponent} from './shared/dialogs/post-share-dialog/post-share-dialog.component';
import {EditTextDialogComponent} from './shared/dialogs/edit-text-dialog/edit-text-dialog.component';
import {RequestsComponent} from './components/requests/requests.component';
import {TransferRequestComponent} from './components/requests/transfer-request/transfer-request.component';
import {PromotionRequestComponent} from './components/requests/promotion-request/promotion-request.component';
import {RequestTransferDialogComponent} from './shared/dialogs/request-transfer-dialog/request-transfer-dialog.component';
import {LetterDataDialogComponent} from './shared/dialogs/letter-data-dialog/letter-data-dialog.component';
import {RequestPromotionDialogComponent} from './shared/dialogs/request-promotion-dialog/request-promotion-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        ProfileComponent,
        EmptyDialogComponent,
        PostComponent,
        FeedWrapperComponent,
        FeedComponent,
        ChatListComponent,
        AnnouncementAreaComponent,
        LogInComponent,
        ProfileAboutComponent,
        ProfileActivityComponent,
        ProfilePostsComponent,
        EmployeeRegisterComponent,
        ResetPasswordComponent,
        EditProfileComponent,
        FeedPostsComponent,
        ChatAreaComponent,
        TimeAgoPipe,
        TruncatePipe,
        TruncateCommentsPipe,
        ConfirmDialogComponent,
        PostingOptionsComponent,
        PostShareDialogComponent,
        EditTextDialogComponent,
        RequestsComponent,
        TransferRequestComponent,
        PromotionRequestComponent,
        RequestTransferDialogComponent,
        LetterDataDialogComponent,
        RequestPromotionDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatIconModule,
        MatSidenavModule,
        MatExpansionModule,
        HttpClientModule,
        LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}),
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
