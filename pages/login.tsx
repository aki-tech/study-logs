import React from 'react';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import Button from '../components/Button';

const LoginPage = () => {
  return (
    <div className="container max-w-3xl mx-auto my-10">
      <Card>
        <PageTitle>アカウント作成</PageTitle>
        <div className="mb-10">
          <label htmlFor="email" className="block mb-2">メールアドレス</label>
          <input id="email" type="email" autoComplete="email" className="rounded-full border w-full" />
        </div>
          <div className="text-center mb-10">
        <Button>アカウント作成</Button>
        </div>
        <div className="pt-10 border-t text-center">
          <div className="grid gap-8 mx-auto max-w-md">
            <Button theme="google">Googleでアカウント作成</Button>
            <Button theme="facebook">Facebookでアカウント作成</Button>
            <Button theme="twitter">Twitterでアカウント作成</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage
