Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: { format: :json } do
    resources :users, only: [:create, :show] do
      member do
        get :confirm_email
      end
    end
    post 'password/forgot', to: 'password#forgot'
    post 'password/reset', to: 'password#reset'
    
    resource :session, only: [:create, :destroy]
  end
  
  root to: 'static_pages#root'
end
