import * as S from './ForumContentHeader.style';
import { BigBorderTagButton, FilterButton, WriteButton } from '../Button';
import SearchBar from '../SearchBar/SearchBar';
import { MENTORING_TAGS, POSTSCRIPT_TAGS, STUDY_TAGS } from '../../assets/constant/TAG';

interface PropsType {
  forumType: string;
}

const ForumContentHeader = ({ forumType }: PropsType) => {
  return (
    <S.ContentHeader>
      <S.TagsContainer>
        {forumType === 'postscript'
          ? POSTSCRIPT_TAGS.map((tag, idx) => <BigBorderTagButton key={idx} text={tag.tagName} />)
          : null}
        {forumType === 'study'
          ? STUDY_TAGS.map((tag, idx) => <BigBorderTagButton key={idx} text={tag.tagName} />)
          : null}
        {forumType === 'mentoring'
          ? MENTORING_TAGS.map((tag, idx) => <BigBorderTagButton key={idx} text={tag.tagName} />)
          : null}
      </S.TagsContainer>
      <S.OtherContainer>
        <SearchBar />
        <FilterButton />
        <WriteButton forumType={forumType} />
      </S.OtherContainer>
    </S.ContentHeader>
  );
};

export default ForumContentHeader;
