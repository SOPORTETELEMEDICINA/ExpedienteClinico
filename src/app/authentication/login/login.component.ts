
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { I18nService } from 'src/app/shared/i18n';
import { ShaService } from 'src/app/shared/jssha/jssha.service';
import { routes } from 'src/app/shared/routes/routes';
import { Login } from '../authenticationClasses';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/utils/notification.service';
import { SwalService } from 'src/app/core/services/swal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public routes = routes;
  public passwordClass = false;
  public _username: string='';
    public _password: string='';
    public _mail: string='';
   // usrest:UserResetpostPassword = new UserResetpostPassword();
   isLoading = false;
   public _idgroups : number =0;
   
  form = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  protected MSG_ERROR_500 = this.i18nService.getTranslation('Fail to log in, try again.');
  protected MSG_ERROR_FAIL = this.i18nService.getTranslation('Incorrect password or username');
  protected MSG_ERROR_UNKNOWN = this.i18nService.getTranslation('Fail to log in, try again. Unknown error');

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private shaService: ShaService,
   // private userDetailsService: UserDetailsService,
    private i18nService: I18nService,
   // private pacienteService : PacienteService,
   private swal: SwalService,
    private notificationService: NotificationService
    ) {
    // this.userDetailsService.usersDetails = new MedicoView();
    // delete this.userDetailsService.fullName;

    this.i18nService.subscribe(() => {
    this.MSG_ERROR_500 = this.i18nService.getTranslation('ERROR AL INICIAR SESION, INTENTELO MAS TARDE');
    this.MSG_ERROR_FAIL = this.i18nService.getTranslation('USUARIO Y/O CONTRASEÑA INCORRECTOS');
    this.MSG_ERROR_UNKNOWN = this.i18nService.getTranslation('ERROR AL INICIAR SESION, INTENTELO MAS TARDE. ERROR DESCONOCIDO');
    }, null);
  }


  ngOnInit(): void {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }

  loginFormSubmit() {
    if (this.form.valid) {
      this.doLogin();
    }
  }

  doLogin(): void {
    this.isLoading = true;

    /**
     * CRETE LOGIN OBJECT FOR STORE DATA
     */
    let LOGIN: Login = new Login();

    /**
     * INIT THAT STORAGE, AND HASH PSW
     */ 
    this._username = this.form.value.email;
    this._password = this.form.value.password;

    LOGIN.username = this._username;
    LOGIN.password = this.shaService.encrypt(
        `${this._password}{${LOGIN.username}}`,
        1000,
        'SHA-256',
        'HEX');
    // GET EMPTY TOKEN
    this.authService.loadToken(null);

    // SUBSCRIBE AND MAKE THE REQUEST
    this.authService.login(LOGIN).subscribe((toks) => {
      const tipoUsuario = toks.idTipoUsuario;
      localStorage.setItem('userData', JSON.stringify(toks)); // Guardamos datos para el Home
      this.router.navigateByUrl('/home');
    
    }, (error) => {
      this.isLoading = false;
      if (error.status === 500) {
        this.swal.error( this.MSG_ERROR_500);
      } else if (error.status === 400) {
        this.swal.error(this.MSG_ERROR_FAIL);
      } else {
        this.swal.error(this.MSG_ERROR_UNKNOWN);
      }
    });
    
}



  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }
}
