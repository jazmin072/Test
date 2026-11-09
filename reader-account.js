(() => {
  'use strict';
  const config=window.CHRONICLES_AUTH_CONFIG||{};
  const status=document.getElementById('account-status');
  const login=document.getElementById('login-form');
  const profile=document.getElementById('profile');
  const emailInput=document.getElementById('reader-email');
  const sendButton=document.getElementById('login-button');
  const avatars=[...document.querySelectorAll('[data-avatar]')];
  const valid=new Set(['plu','selena','breni','reyla','taylor','rey']);
  let selected='plu';
  function message(value){status.textContent=value;}
  function selectAvatar(value){selected=valid.has(value)?value:'plu';avatars.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.avatar===selected)));}
  selectAvatar(selected);
  if(!config.supabaseUrl || !config.supabasePublishableKey || !window.supabase?.createClient) {
    message('Reader account sign-in is not available yet. The free handbook can still be read without an account.');
    return;
  }
  if(!/^https:\/\/[^/]+\.supabase\.co\/?$/.test(config.supabaseUrl)){message('Account service configuration needs attention.');return;}
  const auth=window.supabase.createClient(config.supabaseUrl,config.supabasePublishableKey);
  async function showSession(){
    const {data,error}=await auth.auth.getUser();
    if(error && !/session missing/i.test(error.message)){message('Unable to check your account right now.');return;}
    if(data?.user){
      login.classList.add('hidden');profile.classList.remove('hidden');
      document.getElementById('signed-in-as').textContent='Signed in as '+(data.user.email||'Reader');
      selectAvatar(data.user.user_metadata?.avatar_choice);
      message('Your account is ready. Select and save an avatar below.');
    }else{
      profile.classList.add('hidden');login.classList.remove('hidden');
      message('Enter your email to receive a secure, one-time sign-in link. No password or newsletter subscription.');
    }
  }
  login.addEventListener('submit',async e=>{
    e.preventDefault();const email=emailInput.value.trim();if(!emailInput.checkValidity())return;
    sendButton.disabled=true;message('Requesting sign-in link…');
    try{
      const {error}=await auth.auth.signInWithOtp({email,options:{emailRedirectTo:new URL('/account.html',location.origin).href,shouldCreateUser:true}});
      if(error)throw error;
      message('Check your inbox for your secure sign-in link. It may take a moment to arrive.');
    }catch(err){message('Could not send a sign-in link: '+(err.message||'Try again later.'));}
    finally{sendButton.disabled=false;}
  });
  avatars.forEach(b=>b.addEventListener('click',()=>selectAvatar(b.dataset.avatar)));
  document.getElementById('save-avatar').addEventListener('click',async()=>{
    message('Saving your avatar…');
    const {error}=await auth.auth.updateUser({data:{avatar_choice:selected}});
    message(error?'Could not save your avatar. Please try again.':'Your avatar has been saved.');
  });
  document.getElementById('logout').addEventListener('click',async()=>{
    const {error}=await auth.auth.signOut();
    if(error)message('Could not sign out. Please try again.');
    else await showSession();
  });
  auth.auth.onAuthStateChange(()=>{setTimeout(showSession,0);});
  showSession();
})();
