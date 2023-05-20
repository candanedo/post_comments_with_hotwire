Rails.application.routes.draw do
  devise_for :users

  resources :posts do
    resources :comments, module: :posts
  end

  resources :comments  do
    resources :comments, module: :comments
  end

  root to: 'posts#index'
end
