import {
  DivloadingBc,
  IconDiv,
  IoHomeIcon,
  LoadingContentDiv,
  LoadingP,
} from "./StyleLoading";

interface ILoadProps {
  loading: boolean;
}
export const Loading = ({ loading }: ILoadProps) => {
  return (
    <>
      {loading && (
        <DivloadingBc>
          <LoadingContentDiv>
            <IconDiv>{<IoHomeIcon />}</IconDiv>
            <LoadingP>. . .</LoadingP>
          </LoadingContentDiv>
        </DivloadingBc>
      )}
    </>
  );
};
