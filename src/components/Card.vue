<script setup>
const props = defineProps({
  title: String,
  author: String,
  dateAdded: String,
  images: Object,
  likes: String
})

//methods
function initials(auth) {
    const author = auth.split(' ')
    if(author.length <= 1) {
      author.push('Name')
    }
    const firstname = author[0].charAt(0)
    const lastname = author[author.length-1].charAt(0)
    initials = (firstname+lastname).toUpperCase()
    return initials
  }
  function dateAddedFormat(dateAdded) {
    const date = new Date(dateAdded);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('de-DE', options)
  }
</script>
<template>
  <div class="card">
    <div class="card__header">
      <div class="card__header--img">
        <img :src="images.landscape[0]"/>
      </div>
    </div>

    <div class="card__body">
      <div class="card__author">
        <div class="card__author__potrait">{{initials(author)}}</div>
        <div class ="card__author__data">{{author}}<span>{{dateAddedFormat(dateAdded)}}</span></div>
      </div>
      <div class="card__title">{{title}}</div>
    </div>
    <div class="card__footer">
      <div class="card__footer__action">
        <button class="btn btn-outline">Like</button>
      </div>
      <div class="card__footer__likes">{{likes}}</div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.card {
  background: var(--white);
  border-radius: .5rem;
  width: 100%;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    width: calc(50% - 0.5rem);
    &:not(:last-child){
      margin-right: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    width: calc(33.3% - 0.5rem);
    &:not(:last-child){
      margin-right: 1rem;
    }
  }
  &__header{
    &--img{
      height: 8rem;
      width: 100%;
      overflow: hidden;
      border-radius: .5rem .5rem 0 0;
      & img {
        width: 100%;

      }
    }
  }
  &__body {
    padding: 1rem;
  }
  &__author {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &__potrait {
      border-radius: 100%;
      height: 3rem;
      width: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--primary-variant);
      color: var(--text-dark);
    }
    &__data {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      color: var(--text-default);
      font-weight: 600;
      font-size: small;
      & span {
        color: var(--text-accent);
        font-weight: 200;
        line-height: .5rem;
      }
    }
  }
  &__title {
    margin-top: .5rem;
    font-weight: 600;
  }
  &__footer {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
}

</style>