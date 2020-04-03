Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # Run 'rails routes' to see all available routes
  namespace :api, default: { format: :json } do
    resources :users, only: [:create, :destroy] do
      member do
        patch :update_username
        get :confirm_email
        get :new_pass_form
      end
    end
    post 'passwords/forgot', to: 'passwords#forgot'
    post 'passwords/:token/reset', to: 'passwords#reset'
    
    resource :session, only: [:create, :destroy]
  end
  
  mount ActionCable.server, at: '/cable'
  root to: 'static_pages#root'
end
